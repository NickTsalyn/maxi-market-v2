import Image from "next/image";
import Link from "next/link";
import commentAvatar from "../../img/commentAvatar.png";

type Props = {};

const comments = [
  {
    name: "Катерина",
    photo: commentAvatar,
    date: "15.02.2024 р.",
    text: "Вітаю! Скажіть, будь ласка, у якому стані цей рюкзак?",
  },
  {
    name: "Катерина",
    photo: commentAvatar,
    date: "15.02.2024 р.",
    text: "Вітаю! Скажіть, будь ласка, у якому стані цей рюкзак?",
  },
];

export default function CardProductComments(props: Props) {
  return (
    <ul className="max-h-[180px] pb-3 border-b border-grey-stroke overflow-x-hidden overflow-y-auto">
      {comments.map((comment, i) => (
        <li key={i}>
          <div className="flex items-center justify-between mx-auto mb-1 md:mb-3 py-2 md:py-3">
            <div className="flex flex-row items-center justify-center gap-2">
              <div className="flex justify-center items-center w-10 h-10 bg-[#C4C4C4] rounded-full">
                <Image width={40} height={40} src={comment.photo} alt="photo" />
              </div>
              <p className="body-2 font-medium md:text-base">{comment.name}</p>
            </div>
            <p className="body-2">{comment.date}</p>
          </div>
          <p className="body-2 py-2 mb-4 md:text-base md:mb-6 md:py-3 xl:mb-8">
            {comment.text}
          </p>
          <Link href="" className="pt-3 body-2 xl:text-base text-secondary">
            Відповісти
          </Link>
        </li>
      ))}
    </ul>
  );
}
