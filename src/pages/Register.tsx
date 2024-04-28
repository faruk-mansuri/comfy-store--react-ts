import { ActionFunction, Form, Link, redirect } from 'react-router-dom';
import { Card, CardHeader, CardContent, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { SubmitBtn, FormInput } from '@/components';
import { customFetch } from '@/utils';
import { toast } from '@/components/ui/use-toast';
import { AxiosError } from 'axios';

export const action: ActionFunction = async ({
  request,
}): Promise<Response | null> => {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);
  try {
    await customFetch.post('/auth/local/register', data);
    toast({ description: 'Registered.' });
    return redirect('/login');
  } catch (error) {
    const errorMessage =
      error instanceof AxiosError
        ? error?.response?.data.error.message
        : 'Something went wrong.';
    toast({ description: errorMessage });
    return null;
  }
};

const Register = () => {
  return (
    <div className='h-svh grid place-items-center'>
      <Card className='w-[400px]'>
        <CardHeader>
          <CardTitle className='text-center'>Register</CardTitle>
        </CardHeader>
        <CardContent>
          <Form method='post' className='space-y-3'>
            <FormInput type='text' name='username' />
            <FormInput type='email' name='email' />
            <FormInput type='password' name='password' />

            <SubmitBtn text='register' className='w-full mt-4 uppercase' />

            <p className='text-center mt-4'>
              Already a member?{' '}
              <Button type='button' asChild variant={'link'}>
                <Link to={'/login'}>Login</Link>
              </Button>
            </p>
          </Form>
        </CardContent>
      </Card>
    </div>
  );
};

export default Register;
