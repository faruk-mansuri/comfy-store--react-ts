import {
  Form,
  Link,
  redirect,
  type ActionFunction,
  useNavigate,
} from 'react-router-dom';
import { Card, CardHeader, CardContent, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { SubmitBtn, FormInput } from '@/components';
import { customFetch } from '@/utils';
import { toast } from '@/components/ui/use-toast';
import { type ReduxStore } from '@/store';
import { loginUser } from '@/features/user/userSlice';
import { useAppDispatch } from '@/hooks';

export const action =
  (store: ReduxStore): ActionFunction =>
  async ({ request }): Promise<Response | null> => {
    const formData = await request.formData();
    const data = Object.fromEntries(formData);

    try {
      const response = await customFetch.post('/auth/local', data);
      const username = response.data.user.username;
      const jwt = response.data.jwt;

      store.dispatch(loginUser({ username, jwt }));
      toast({ description: 'Login Successful.' });
      return redirect('/');
    } catch (error) {
      console.log(error);
      // const errorMessage =
      //   error instanceof AxiosError
      //     ? error.response?.data.message
      //     : 'Login Failed.';
      toast({ description: 'Login Failed.' });
      return null;
    }
  };

const Login = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const loginAsGuessUser = async (): Promise<void> => {
    try {
      const response = await customFetch.post('/auth/local', {
        identifier: 'test@test.com',
        password: 'secret',
      });

      const username = response.data.user.username;
      const jwt = response.data.jwt;
      dispatch(loginUser({ username, jwt }));
      navigate('/');
    } catch (error) {
      console.log(error);
      toast({ description: 'Login Failed.' });
    }
  };

  return (
    <section className='h-svh grid place-items-center'>
      <Card className='w-[400px]'>
        <CardHeader>
          <CardTitle className='text-center'>Login</CardTitle>
        </CardHeader>

        <CardContent>
          <Form method='POST'>
            <FormInput type='email' label='email' name='identifier' />
            <FormInput type='password' label='password' name='password' />

            <SubmitBtn text='login' className='w-full mt-4 uppercase' />

            <Button
              type='button'
              variant={'outline'}
              onClick={loginAsGuessUser}
              className='w-full mt-4 uppercase'
            >
              Guest User
            </Button>

            <p className='text-center mt-4'>
              Don&#39;t have an account ?{' '}
              <Button type='button' asChild variant={'link'}>
                <Link to={'/register'}>Register</Link>
              </Button>
            </p>
          </Form>
        </CardContent>
      </Card>
    </section>
  );
};

export default Login;
