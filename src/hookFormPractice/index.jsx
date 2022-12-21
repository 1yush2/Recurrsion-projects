import React from "react";
import { useForm } from "react-hook-form";

const OurForm = () => {
  const { register, handleSubmit, reset } = useForm();
  const onSubmit = (data) => {
    console.log(data);
    alert("Your Message has been received");
    reset();
  };

  return (
    <div className="container mx-auto px-4 py-10">
      <div className="bg-gray-50 p-5 max-w-xl rounded-lg mx-auto">
        <div className="flex flex-col gap-4">
          <h4 className="text-3xl text-sky-500">Let's Connect</h4>
          <span className="text-slate-400 text-sm">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
          </span>
          <hr />
        </div>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="grid grid-cols-2 gap-5 py-5"
        >
          <div className="flex flex-col gap-2">
            <label className="text-slate-500 text-md">First Name</label>
            <input
              {...register("fName")}
              className="p-4 outline-none border-none"
              placeholder="Enter your first name"
              autoComplete="off"
            />
          </div>

          <div className="flex flex-col gap-2">
            <label className="text-slate-500 text-md">Last Name</label>
            <input
              {...register("lName")}
              className="p-4 outline-none border-none"
              placeholder="Enter your last name"
              autoComplete="off"
            />
          </div>

          <div className="flex flex-col gap-2 ">
            <label className="text-slate-500 text-md">Email</label>
            <input
              {...register("email")}
              className="p-4 outline-none border-none"
              placeholder="Enter your email address"
              autoComplete="off"
            />
          </div>

          <div className="flex flex-col gap-2 ">
            <label className="text-slate-500 text-md">Phone</label>
            <input
              {...register("phone")}
              className="p-4 outline-none border-none"
              placeholder="Enter your email address"
              autoComplete="off"
            />
          </div>

          <div className="flex flex-col gap-2 col-span-2">
            <label className="text-slate-500 text-md">Subject</label>
            <input
              {...register("subject")}
              className="p-4 outline-none border-none"
              placeholder="Your matter of interest ..."
              autoComplete="off"
            />
          </div>

          <div className="flex flex-col gap-2 col-span-2">
            <label className="text-slate-500 text-md">How can we help?</label>
            <textarea
              {...register("message")}
              className="p-4 outline-none border-none resize-none"
              placeholder="Please give us a feedback"
              rows="5"
              autoComplete="off"
            ></textarea>
          </div>

          <button
            type="submit"
            className="p-3 bg-sky-300 text-white hover:bg-sky-400 font-medium transition rounded-md"
          >
            Submit
          </button>

          <hr className="col-span-2" />
        </form>
      </div>
    </div>
  );
};

export default OurForm;
