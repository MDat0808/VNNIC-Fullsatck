export default function UnionMemberItem({ rank, name, position }) {
  return (
    <li className="py-2 border-t border-gray-300">
      <div className="flex items-center space-x-4 rtl:space-x-reverse">
        <div className="flex-shrink-0">
          <div
            className={`w-9 h-9 flex items-center justify-center rounded-full ${
              rank === 1
                ? "bg-red-500 text-white"
                : rank === 2 || rank === 3
                ? "bg-black text-white"
                : "border border-gray-700 text-gray-700"
            }`}
          >
            #{rank}
          </div>
        </div>
        <div className="flex-1 min-w-0">
          <p className="text-[13px] uppercase font-medium truncate dark:text-white">
            {name}
          </p>
        </div>
        <div class="inline-flex items-center text-[13px] font-medium text-gray-500 dark:text-white">
          {position} hoạt động
        </div>
      </div>
    </li>
  );
}
