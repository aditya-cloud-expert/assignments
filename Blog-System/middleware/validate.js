const { z } = require('zod');

// Define validation schema
const userSchema = z.object({
    email: z.string().email(),
    password: z.string().min(6),
});

function validate(reqBody) {
    try {
        // Validate the request body
        userSchema.parse(reqBody);
    } catch (error) {
        // Throw an error to be caught by the calling function
        throw new Error(error.errors?.[0]?.message || 'Validation failed');
    }
}

module.exports = validate;
