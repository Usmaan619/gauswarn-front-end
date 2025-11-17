export default function DiscoverChecklistItem({ text }) {
  return (
    <div className="discover-checklist-item">
      <svg
        className="checkmark"
        width="20"
        height="20"
        viewBox="0 0 20 20"
        fill="none"
      >
        <circle cx="10" cy="10" r="9" fill="#22C55E" />
        <path
          d="M6 10L9 13L14 8"
          stroke="white"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
      <span className="discover-checklist-text">{text}</span>
    </div>
  );
}
