// Check settings store interface
let customEnv = {}

// Configure environment variables for tests
process.env = { ...process.env, ...customEnv };