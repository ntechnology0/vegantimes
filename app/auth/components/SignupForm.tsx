import { z } from "zod"
import { AuthenticationError, PromiseReturnType } from "blitz"
import Link from "next/link"
import dynamic from "next/dynamic"
import { Signup } from "app/auth/validations"
import { useMutation } from "@blitzjs/rpc"
import styled from "styled-components"
import { toFormikValidationSchema } from "zod-formik-adapter"
import signup from "../mutations/signup"

const Form = dynamic(() => import("formik").then((d) => d.Form))
const Guides = dynamic(() => import("@app/core/layouts/Guides"))
const Layout = dynamic(() => import("@app/core/layouts/Layout"))
const Header = dynamic(() => import("@app/home/Header"))
const Button = dynamic(() => import("@app/core/components/Button"))
const Field = dynamic(() => import("formik").then((r) => r.Field))
const Formik = dynamic(() => import("formik").then((r) => r.Formik))

type SignupFormProps = {
  onSuccess?: (user: PromiseReturnType<typeof signup>) => void
}

const SignupStyled = styled.div`
  .skew {
    height: 600px;
    &__bg {
      height: 600px;
      top: 0px;
    }
  }
  .form-box {
    padding: 30px 30px 30px;
  }
`

export const SignupForm = (props: SignupFormProps) => {
  const [signupMutation] = useMutation(signup)
  return (
    <SignupStyled className="flex flex-col justify-start items-start min-h-screen">
      <Guides useSize={false} />
      <Layout>
        <div className="w-screen flex h-full flex-col justify-start items-center space-y-32">
          <Header />
          <Formik
            validationSchema={toFormikValidationSchema(Signup)}
            initialValues={{ email: "", password: "" }}
            onSubmit={async (values: z.infer<typeof Signup>) => {
              try {
                const user = await signupMutation({
                  email: values.email,
                  password: values.password,
                })
                props.onSuccess?.(user)
              } catch (error: any) {
                if (error instanceof AuthenticationError) {
                  return { [""]: "Sorry, those credentials are invalid" }
                } else {
                  return {
                    [""]:
                      "Sorry, we had an unexpected error. Please try again. - " + error.toString(),
                  }
                }
              }
            }}
          >
            {({ isSubmitting }) => (
              <Form>
                <div className="w-full lg:max-w-[420px] mx-auto flex flex-col justify-center items-center">
                  <div className="bg-white w-full space-y-3 form-box shadow-lg border border-slate-500 rounded flex flex-col justify-start items-start">
                    <h1 className="font-medium fonts__poppins_regular text-sm font-sans">
                      Create an account
                    </h1>
                    <div className="rounded-md border w-full border-gray-300 px-3 py-2 shadow-sm focus-within:border-[#0389FF] focus-within:ring-1 focus-within:ring-[#0389FF]">
                      <label
                        htmlFor="email"
                        className="block text-xs fonts__inter_regular font-medium text-gray-900"
                      >
                        E-mail
                      </label>
                      <Field
                        type={"email"}
                        autoComplete={"off"}
                        autoCapitalize={"none"}
                        name="email"
                        id="email"
                        className="block w-full border-0 text-sm p-0 focus:outline-none fonts__inter_regular text-gray-900 placeholder-gray-500 focus:ring-0 sm:text-sm"
                        placeholder="name@parawell.ma"
                      />
                    </div>
                    <div className="rounded-md border w-full border-gray-300 px-3 py-2 shadow-sm focus-within:border-[#0389FF] focus-within:ring-1 focus-within:ring-[#0389FF]">
                      <label
                        htmlFor="password"
                        className="block text-xs fonts__inter_regular font-medium text-gray-900"
                      >
                        Password
                      </label>
                      <Field
                        type={"password"}
                        autoComplete={"off"}
                        autoCapitalize={"none"}
                        name="password"
                        id="password"
                        className="block w-full border-0 text-sm focus:outline-none p-0 fonts__inter_regular text-gray-900 placeholder-gray-500 focus:ring-0 sm:text-sm"
                        placeholder="Min. 12 caractères"
                      />
                    </div>
                    <Button
                      type="primary"
                      disabled={isSubmitting}
                      className="w-full fonts__inter_regular flex text-sm font-medium flex-row justify-center items-center"
                    >
                      <span>Continue</span>
                    </Button>
                    <p
                      className="mt-2 text-xs font__inter_regular text-gray-500"
                      id="email-description"
                    >
                      Nous utilisons un système de connexion sans mot de passe avec des liens
                      magiques. Vous serez recevoir un e-mail pour confirmer votre connexion.
                    </p>
                  </div>
                  <div className="w-full flex py-5 flex-row justify-start items-center">
                    <p className="text-sm text-slate  text-slate-500 font__inter_regular">
                      {"Do you have an account ?"}&nbsp;
                      <Link passHref={false} href={"/auth/login"}>
                        <span className="text-primary cursor-pointer">Start a new session</span>
                      </Link>
                    </p>
                  </div>
                </div>
              </Form>
            )}
          </Formik>
        </div>
      </Layout>
    </SignupStyled>
  )
}

export default SignupForm
