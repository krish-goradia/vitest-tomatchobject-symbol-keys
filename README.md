# toMatchObject ignores symbol keys

Run: `npm i && npm test`

The two `toMatchObject` tests fail (the assertion does not throw), while `toEqual` correctly throws for the same values.
