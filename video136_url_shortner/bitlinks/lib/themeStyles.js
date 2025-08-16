// lib/themeStyles.js

export const getThemeClasses = (theme) => {
  const isLight = theme === "light";

  return {
    /* Base text styles */
    text: isLight
      ? "text-gray-900"
      : "text-gray-100",

      textpurple: isLight
        ? "text-purple-700"
        : "text-purple-300",

    heading: isLight
      ? "text-4xl font-extrabold text-blue-900"
      : "text-4xl font-extrabold text-white",

    subheading: isLight
      ? "text-xl font-semibold text-blue-800"
      : "text-xl font-semibold text-gray-300",

    paragraph: isLight
      ? "text-lg leading-relaxed text-gray-800"
      : "text-lg leading-relaxed text-gray-200",

    subtext: isLight
      ? "text-sm text-gray-500"
      : "text-sm text-gray-400",

    /* Buttons */
    button: isLight
      ? "bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg shadow-md transition"
      : "bg-gray-800 hover:bg-gray-700 text-white px-4 py-2 rounded-lg shadow-md transition",

    buttonPrimary: isLight
      ? "bg-purple-500 hover:bg-purple-600 text-white px-4 py-2 rounded-lg shadow-lg transition"
      : "bg-purple-700 hover:bg-purple-600 text-white px-4 py-2 rounded-lg shadow-lg transition",

    /* Inputs */
    input: isLight
      ? "border border-gray-300 bg-white text-gray-900 placeholder-gray-500 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
      : "border border-gray-600 bg-gray-800 text-gray-100 placeholder-gray-400 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 transition",

    textarea: isLight
      ? "border border-gray-300 bg-white text-gray-900 placeholder-gray-500 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
      : "border border-gray-600 bg-gray-800 text-gray-100 placeholder-gray-400 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 transition",

    /* Links */
    link: isLight
      ? "text-blue-600 hover:text-blue-800 underline"
      : "text-blue-400 hover:text-blue-300 underline",

    /* Cards */
    card: isLight
      ? "bg-white bg-opacity-80 backdrop-blur-lg shadow-lg rounded-xl p-4"
      : "bg-gray-900 bg-opacity-80 backdrop-blur-lg shadow-lg rounded-xl p-4",

    /* Badges */
    badge: isLight
      ? "bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded"
      : "bg-blue-900 text-blue-200 text-xs font-medium px-2.5 py-0.5 rounded",

    /* Dividers */
    divider: isLight
      ? "border-t border-gray-300"
      : "border-t border-gray-700",

    /* Tables */
    tableHeader: isLight
      ? "bg-gray-100 text-gray-800"
      : "bg-gray-800 text-gray-200",

    tableRow: isLight
      ? "border-b border-gray-200 hover:bg-gray-50"
      : "border-b border-gray-700 hover:bg-gray-800",

    /* Modals */
    modalBackground: isLight
      ? "bg-white shadow-lg rounded-lg p-6"
      : "bg-gray-900 shadow-lg rounded-lg p-6",


  };
};
