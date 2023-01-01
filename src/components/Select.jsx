const Select = ({ label, textLabel, dataSelects }) => {
  return (
    <div className="flex flex-col text-start space-y-1 my-2">
      <label className="font-medium cursor-pointer" htmlFor={label}>
        {textLabel}
      </label>
      <select className="p-[10px] rounded-sm dark:text-gray-300 bg-white dark:bg-gray-700  outline-slate-300 dark:outline-gray-600" name={label} id={label}>
        {dataSelects?.map((x) => (
          <option key={x} value={x}>
            {x}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Select;
