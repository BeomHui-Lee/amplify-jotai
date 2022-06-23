type CheckBoxIcon = {
  addClass?: string;
};

const CheckBoxIcon = ({ addClass }: CheckBoxIcon) => {
  return (
    <svg className={`w-5 h-5 ${addClass}`} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M17.6553 7.28414C18.0901 7.68551 18.1172 8.36335 17.7159 8.79816L9.80377 17.3696C9.60094 17.5893 9.31552 17.7143 9.01648 17.7143C8.71745 17.7143 8.43202 17.5893 8.2292 17.3696L3.28414 12.0124C2.88278 11.5776 2.9099 10.8998 3.3447 10.4984C3.77951 10.0971 4.45736 10.1242 4.85872 10.559L9.01648 15.0632L16.1413 7.34471C16.5426 6.9099 17.2205 6.88278 17.6553 7.28414Z"
        fill="#12B564"
      />
    </svg>
  );
};

export default CheckBoxIcon;
