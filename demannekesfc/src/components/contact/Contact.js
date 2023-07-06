export default function Contact() {
  const handleEmailClick = () => {
    const emailAddress = "info@mannekes.be";
    navigator.clipboard.writeText(emailAddress);
    window.location.href = `mailto:${emailAddress}`;
  };

  const handleInstagramClick = () => {
    window.open("https://www.instagram.com/bryan_langhendries");
  };

  return (
    <div
      id="contact"
      class="h-screen bg-blue-50 flex flex-row items-center justify-around "
    >
      <div className="w-1/3 flex flex-col items-center">
        <div>
          <h2 class="font-bold tracking-tight text-black sm:text-6xl  text-center">
            Contact Us
          </h2>
          <p class="mb-6 font-light text-center text-blue-400 sm:text-xl">
            Let's build something great together.
          </p>
        </div>
          <p className="text-center text-gray-500">
            was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum
          </p>
        <div className="pt-6">
          
          <button class="bg-blue-500 text-white font-semibold transition-colors shadow-lg duration-300 ease-in-out hover:text-blue-500 px-4 border-2 border-blue-500 hover:bg-transparent rounded h-10">
          Schedule Meeting
          </button>
        </div>
      </div>
      <div className="border-l-2  w-0.5 h-5/6 opacity-50  border-blue-950">

      </div>

      <div>
        <h2 h2 class="text-5xl font-bold tracking-tight text-black text-center">
          Leave A Message
        </h2>
        <p class="mb-6 font-light text-center text-blue-400 sm:text-xl">
          Ask us questions to help you realise your future website.
        </p>
        <div class="p-4">
          <div className="  p-8 bg-gray-50 drop-shadow-lg w-[32rem] ">
            <form action="#" class="space-y-8">
              <div>
                <label
                  for="FullName"
                  class="block mb-2 text-sm font-medium text-blue-400 dark:text-gray-300"
                >
                  Full Name
                </label>
                <input
                  type="text"
                  id="FullName"
                  class="shadow-sm bg-gray-50 border border-gray-300 text-blue-400 text-sm  focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                  placeholder="Full Name"
                  required
                />
              </div>
              <div>
                <label
                  for="email"
                  class="block mb-2 text-sm font-medium text-blue-400 dark:text-gray-300"
                >
                  Your email
                </label>
                <input
                  type="email"
                  id="email"
                  class="shadow-sm bg-gray-50 border border-gray-300 text-blue-400 text-sm  focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                  placeholder="name@email.com"
                  required
                />
              </div>
              <div>
                <label
                  for="subject"
                  class="block mb-2 text-sm font-medium text-blue-400 dark:text-gray-300"
                >
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  class="block p-3 w-full text-sm text-gray-900 bg-gray-50 border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                  placeholder="Let us know how we can help you"
                  required
                />
              </div>
              <div class="sm:col-span-2">
                <label
                  for="message"
                  class="block mb-2 text-sm font-medium text-blue-400 dark:text-gray-400"
                >
                  Your message
                </label>
                <textarea
                  id="message"
                  rows="6"
                  class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                  placeholder="Leave a comment..."
                ></textarea>
              </div>
              <button
                type="submit"
                class="bg-blue-500 text-white font-semibold transition-colors shadow-lg duration-300 ease-in-out hover:text-blue-500 px-4 border-2 border-blue-500 hover:bg-transparent rounded h-10"
              >
                Send message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
