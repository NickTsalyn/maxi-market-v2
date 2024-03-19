export default function CardProductDescription() {
  const options = [
    "застібка на блискавку",
    "регульовані бретельки регульовані підтяжки",
    "додаткова кишеня спереду",
    "2 бокові кишені",
    "декоративний принт",
  ];
  return (
    <div className="mb-4 border-b border-grey-stroke">
      <h2 className="pb-4 header-3 text-tertiary xl:header-2">Опис товару</h2>
      <ul className="mb-4 ">
        {options.map((option, i) => (
          <li
            key={i}
            className="before:inline-block before:w-0.5 before:h-0.5 before:rounded-full before:align-middle before:mr-2.5 before:bg-quaternary body-2 text-[#373737] md:body-1 "
          >
            {option}
          </li>
        ))}
      </ul>
      <p className="mb-4 body-2 text-[#373737] md:body-1">
        Розміри продукту: 28 cm x 40 cm x 11 cm
      </p>
    </div>
  );
}
