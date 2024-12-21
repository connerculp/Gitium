import RateLimit from './RateLimit';

const Footer = () => {
  return (
    <footer className="w-full bg-gray-200 text-center p-4 mt-4 rounded-lg">
      <RateLimit />
      <p className="text-gray-600">GitHub Dashboard &copy; 2024</p>
    </footer>
  );
};

export default Footer;