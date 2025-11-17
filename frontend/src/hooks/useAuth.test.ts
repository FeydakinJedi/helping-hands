import { renderHook, act } from "@testing-library/react";
import { useAuth } from "./useAuth";
import api from "../utils/api";

// Mock API requests
jest.mock("../utils/api");
const mockedApi = api as jest.Mocked<typeof api>;

// Clear localStorage before each test
beforeEach(() => {
  localStorage.clear();
});

describe("useAuth hook", () => {
  it("should initialize with no user", () => {
    const { result } = renderHook(() => useAuth());
    expect(result.current.user).toBeNull();
  });

  it("should log in a user and store data in localStorage", async () => {
    const mockUser = { id: 1, name: "John Doe", email: "john@example.com" };
    const mockToken = "mocked-token-123";

    mockedApi.post.mockResolvedValueOnce({
      data: { access_token: mockToken, user: mockUser },
    });

    const { result } = renderHook(() => useAuth());

    await act(async () => {
      await result.current.login("john@example.com", "password123");
    });

    expect(result.current.user).toEqual(mockUser);
    expect(localStorage.getItem("user")).toBe(JSON.stringify(mockUser));
    expect(localStorage.getItem("token")).toBe(mockToken);
  });

  it("should log out a user and remove data from localStorage", () => {
    localStorage.setItem("user", JSON.stringify({ id: 1, name: "John Doe" }));
    localStorage.setItem("token", "mocked-token-123");

    const { result } = renderHook(() => useAuth());

    act(() => {
      result.current.logout();
    });

    expect(result.current.user).toBeNull();
    expect(localStorage.getItem("user")).toBeNull();
    expect(localStorage.getItem("token")).toBeNull();
  });
});
