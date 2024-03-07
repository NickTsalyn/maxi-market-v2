import { IconSearch } from '../Icons/Icons';

type Props = {
  children?: React.ReactNode;
  label?: string;
  placeholder?: string;
  required?: boolean;
  type: 'text' | 'email' | 'password' | 'tel';
  style: 'form' | 'search' | 'subscribe';
};

export default function Input(props: Props) {
  if (props.style === 'search') {
    return (
      <div className='body-2 flex gap-2 w-full bg-white text-tertiary bg-transparent px-4 border-2 border-grey-stroke rounded-l focus-within:border-tertiary'>
        <div className='my-[10px] md:my-4'>
          <IconSearch />
        </div>
        <input className='w-full outline-none' type={props.type} placeholder={props.placeholder} />
      </div>
    );
  }

  if (props.style === 'subscribe') {
    return (
      <div className='body-2 flex flex-auto gap-2 bg-white text-tertiary bg-transparent h-[53px] border-2 border-grey-stroke rounded-l focus-within:border-tertiary'>
        <input className='w-full p-4 outline-none' type={props.type} placeholder={props.placeholder} />
      </div>
    );
  }

  return (
    <div className='body-2 text-tertiary'>
      <label className='block mb-2'>{props.label}</label>
      <input
        className='w-full outline-none bg-transparent h-[53px] p-4 border-2 border-grey-stroke rounded focus:border-tertiary focus:placeholder:text-grey-stroke invalid:border-danger invalid:placeholder:text-danger'
        type={props.type}
        placeholder={props.placeholder}
        required={props.required}
      />
      {props.required && <span className='tabs-typography text-danger'>Помилка</span>}
    </div>
  );
}
