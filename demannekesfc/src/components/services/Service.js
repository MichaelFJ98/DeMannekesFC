export default function Service({ icon: Icon, title, info }) {
  return (
    <div className="flex flex-col items-center py-8">
      <div className="bg-blue-500 w-11 h-11 rounded-full flex justify-center items-center ">
        <Icon className="w-7 h-7 text-white m-3" />
      </div>
      <div className="text-center mb-2 mt-4 text-xl">
        <h1 className="font-black text-blue-950">{title}</h1>
      </div>
      <div className="max-w-xs text-center">
        <p className="text-gray-500 font-semibold">{info}</p>
      </div>
    </div>
  );
}
