# k6 Load Testing Script

This is a basic k6 load testing script for testing HTTP requests to a sample API endpoint. k6 is an open-source load testing tool.

## Overview

This load testing script is designed to:

- Send HTTP GET requests to a sample API endpoint (`http://example.com/posts/{id}`).
- Validate various aspects of the HTTP response, such as response status, response body size, and content.

## Prerequisites

Before running this script, ensure that you have the following prerequisites:

- [k6](https://k6.io/) installed on your machine.
- Access to a target API or website that you want to test.

## Usage

1. Clone or download this repository to your local machine.

2. Navigate to the directory containing the k6 script.

3. Run the k6 script using the following command:

   ```shell
   k6 run your-script.js
