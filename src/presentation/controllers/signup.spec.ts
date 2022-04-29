import { SignUpController } from './signup'

describe('SignUp Controller', () => {
  test('Should return 400 if no name is provided', () => {
    const sut = new SignUpController()
    const httpRequest = {
      body: {
        name: 'any_name',
        email: 'any_email@mail.co',
        password: 'any_password'
      }
    }
    const httpReponse = sut.handle(httpRequest)
    expect(httpReponse.statusCode).toBe(400)
  })
})
