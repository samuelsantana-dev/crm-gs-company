
interface AvatarProps {
  profilePicture: string;
  name: string;
  size?: "sm" | "md" | "lg";
}

const sizes = {
  sm: "w-8 h-8",
  md: "w-10 h-10",
  lg: "w-12 h-12",
};

export function Avatar({ profilePicture, name, size = "md" }: AvatarProps) {
  if (profilePicture) {
    return (
      <img
        src={profilePicture}
        alt={name}
        className={`${sizes[size]} rounded-full object-cover`}
      />
    );
  }

  return (
    <div
      className={`${sizes[size]} rounded-full bg-gray-200 flex items-center justify-center text-xs font-bold text-gray-600`}
    >
      {name.charAt(0)}
    </div>
  );
}
