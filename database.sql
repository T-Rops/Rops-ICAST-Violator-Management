CREATE DATABASE IF NOT EXISTS ICAST_Violator_Management;

CREATE TYPE SEX AS ENUM ('Male', 'Female');
CREATE TYPE CIVIL_STATUS AS ENUM ('Single', 'Married');
CREATE TYPE VIOLATOR_TYPE AS ENUM ('Student', 'Civillian');
CREATE TYPE APPREHENDER_TYPE AS ENUM ('Police', 'Agent');

-- 1. CREATE VIOLATOR TABLE
CREATE TABLE IF NOT EXISTS CaughtViolators (
  id UUID PRIMARY KEY,
  first_name VARCHAR(255) NOT NULL,
  last_name VARCHAR(255) NOT NULL,
  middle_name VARCHAR(255) NOT NULL,
  date_of_birth DATE NOT NULL,
  sex SEX NOT NULL,
  civil_status CIVIL_STATUS NOT NULL,
  address TEXT NOT NULL,
  institution VARCHAR(255) NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  synced INT DEFAULT 0
);

-- 2. CREATE VIOLATIONS TABLE
CREATE TABLE IF NOT EXISTS Violations (
  id UUID PRIMARY KEY,
  violator_id UUID NOT NULL REFERENCES CaughtViolators(id) ON DELETE CASCADE,
  violation_place VARCHAR(255) NOT NULL,
  violation_date DATE NOT NULL,
  OR_number INT NOT NULL,
  violator_type VIOLATOR_TYPE NOT NULL,
  apprehender_type APPREHENDER_TYPE NOT NULL,
  apprehender_name VARCHAR(255) NOT NULL,
  paid BOOLEAN NOT NULL DEFAULT false,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  synced INT DEFAULT 0
);