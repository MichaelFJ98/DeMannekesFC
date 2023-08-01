export default function Service({ icon: Icon, title, info }) {
  return (
    <div className="flex flex-col items-center py-8">
      <div className="bg-primary dark:bg-dark-primary w-11 h-11 rounded-full flex justify-center items-center ">
        <Icon className="w-7 h-7 text-white dark:text-dark-text m-3" />
      </div>
      <div className="text-center mb-2 mt-4 text-xl">
        <h1 className="font-black text-primary dark:text-primary">
          {title}
        </h1>
      </div>
      <div className="max-w-xs text-center">
        <p className="text-gray-500 dark:text-white font-semibold">{info}</p>
      </div>
    </div>
  );
}
