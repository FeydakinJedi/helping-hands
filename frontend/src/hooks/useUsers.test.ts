import { renderHook, waitFor } from "@testing-library/react";
import { useUsers } from "./useUsers";
import axios from "axios";

// Mock API response
jest.mock("axios");
const mockedAxios = axios as jest.Mocked<typeof axios>;

describe("useUsers hook", () => {
  it("fetches and returns users", async () => {
    // Set up mock API response
    mockedAxios.get.mockResolvedValueOnce({
      data: [{ id: 1, name: "John Doe", email: "john@example.com" }],
    });

    // Render the hook
    const { result } = renderHook(() => useUsers());

    // Wait for the state update
    await waitFor(() => expect(result.current.loading).toBe(false));

    // Verify the data is correctly set
    expect(result.current.users).toHaveLength(1);
    console.log(result.current.users)
    expect(result.current.users[0].name).toBe("John Doe");
  });

  it("handles API errors", async () => {
    // Simulate API failure
    mockedAxios.get.mockRejectedValueOnce(new Error("API error"));

    const { result } = renderHook(() => useUsers());

    // Wait for error state
    await waitFor(() => expect(result.current.error).toBe("API error"));

    expect(result.current.users).toEqual([]);
    expect(result.current.loading).toBe(false);
  });
});
