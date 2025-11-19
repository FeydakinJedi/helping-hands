#!/bin/bash

# Database Reset Script for Prisma + NestJS
# This script drops the existing database, recreates it, and runs migrations

set -e  # Exit on any error

# Load environment variables from .env file
if [ -f .env ]; then
  export $(cat .env | grep -v '^#' | xargs)
else
  echo "Error: .env file not found"
  exit 1
fi

# Extract database details from DATABASE_URL
# Format: postgresql://user:password@host:port/database
DB_URL=$DATABASE_URL

# Parse DATABASE_URL
DB_USER=$(echo $DB_URL | sed -n 's/.*:\/\/\([^:]*\):.*/\1/p')
DB_PASSWORD=$(echo $DB_URL | sed -n 's/.*:\/\/[^:]*:\([^@]*\)@.*/\1/p')
DB_HOST=$(echo $DB_URL | sed -n 's/.*@\([^:]*\):.*/\1/p')
DB_PORT=$(echo $DB_URL | sed -n 's/.*:\([0-9]*\)\/.*/\1/p')
DB_NAME=$(echo $DB_URL | sed -n 's/.*\/\([^?]*\).*/\1/p')

echo "================================================"
echo "Database Reset Script"
echo "================================================"
echo "Database: $DB_NAME"
echo "Host: $DB_HOST"
echo "Port: $DB_PORT"
echo "User: $DB_USER"
echo "================================================"

# Warning message
echo ""
echo "⚠️  WARNING: This will DELETE all data in the '$DB_NAME' database!"
read -p "Are you sure you want to continue? (yes/no): " CONFIRM

if [ "$CONFIRM" != "yes" ]; then
  echo "Aborted."
  exit 0
fi

echo ""
echo "Step 1: Dropping existing database..."
PGPASSWORD=$DB_PASSWORD psql -h $DB_HOST -p $DB_PORT -U $DB_USER -d postgres -c "DROP DATABASE IF EXISTS \"$DB_NAME\";"
echo "✓ Database dropped"

echo ""
echo "Step 2: Creating new database..."
PGPASSWORD=$DB_PASSWORD psql -h $DB_HOST -p $DB_PORT -U $DB_USER -d postgres -c "CREATE DATABASE \"$DB_NAME\";"
echo "✓ Database created"

echo ""
echo "Step 3: Running Prisma migrations..."
npx prisma migrate dev
echo "✓ Migrations complete"

echo ""
echo "Step 4: Generating Prisma Client..."
npx prisma generate
echo "✓ Prisma Client generated"

echo ""
echo "================================================"
echo "✅ Database reset complete!"
echo "================================================"