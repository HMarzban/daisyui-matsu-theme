const ThemName = () => {
  return (
    <div className="flex items-center gap-2">
      <div className="avatar w-12 h-12 rounded-full overflow-hidden border-2 border-base-300 relative">
        <img
          src="./assets/Hossein.png"
          alt="Avatar"
          className="object-cover w-full h-full absolute inset-0"
        />
      </div>
      <span className="font-bold">Matsu Theme</span>
    </div>
  );
};

export default ThemName;
