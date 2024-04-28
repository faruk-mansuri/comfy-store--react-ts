import { Skeleton } from '@/components/ui/skeleton';

const Loading = () => {
  return (
    <div className='pt-12 grid gap-4 md:grid-cols-2  lg:grid-cols-3'>
      {Array.from({ length: 3 }).map((_, index) => {
        return (
          <div className='flex flex-col space-y-3' key={index}>
            <Skeleton className='h-[125px] w-full rounded-xl' />
            <div className='space-y-2'>
              <Skeleton className='h-5 max-auto w-[300px]' />
              <Skeleton className='h-4 leading-3 max-auto w-[250px]' />
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Loading;
