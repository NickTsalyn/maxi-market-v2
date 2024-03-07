import Button from '@/components/UI/Button';
import Input from '@/components/UI/Input';

export default function NewsSubscription() {
  return (
    <section className='bg-primary py-10 lg:py-20'>
      <div className='container'>
        <h2 className='header-1 text-center mb-6 lg:mb-8'>Дізнавайтеся першими про розпродажі і новинки </h2>
        <form className='flex justify-center'>
          <div className='flex w-full max-w-[543px]'>
            <Input type='email' placeholder='Ваш Email...' style='subscribe' />
            <Button style='tertiary' type='submit'>
              Підписатися
            </Button>
          </div>
        </form>
      </div>
    </section>
  );
}
