import { emailFormat } from "./validation"

describe('Email input validation testcases', () => {
    test("Should fail on non valid email", () => {
        expect(emailFormat('footlocker.com')).toBe('Please enter your email in this format: name@company.com.')
    })
    test("Should not allow non valid email", () => {
        expect(emailFormat('@gmail.com')).toBe("Please enter your email in this format: name@company.com.")
    })
    test("Should not allow special characters for email", () => {
        expect(emailFormat('fàotlocker@gmail.com')).toBe("We don't allow any special characters in the customers email and ID.")
    })
    test("Should not allow special characters for email", () => {
        expect(emailFormat('àŒabc@gmàŒ.com')).toBe("We don't allow any special characters in the customers email and ID.")
    })
    test("Should allow on valid email", () => {
        expect(emailFormat('footlocker@gmail.com')).toBeUndefined()
    })
})