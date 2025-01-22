import React from "react";

export default function Inputs({
  type,
  labelName,
  placeholder,
  name,
  value,
  onChange,
  onBlur,
  email,
  password,
}) {
  return (
    <>
      <div className="flex flex-col space-y-1">
        <label className="label">
          <span className="label-text text-[#E0E0E0]">{labelName}</span>
        </label>
        <input
          type={type}
          placeholder={placeholder}
          className="input-xs sm:input-sm  md:input-md lg:input-lg  input-primary p-1 bg-[#2A2A2A] text-[#E0E0E0] border-[#4A90E2]"
          required
          name={name}
          value={value}
          onChange={onChange}
          onBlur={onBlur}
        />
      </div>
    </>
  );
}
