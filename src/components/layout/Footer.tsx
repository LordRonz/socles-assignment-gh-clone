const Footer = () => {
  return (
    <footer className='mx-auto block w-full max-w-7xl px-4'>
      <p className='mt-8 text-sm text-gray-600 dark:text-gray-300'>
        &copy; {new Date().getFullYear()} Aaron Christopher
      </p>
    </footer>
  );
};

export default Footer;
