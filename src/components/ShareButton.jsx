const ShareButton = ({ variant = "button" }) => {
  const handleShare = () => {
    const shareData = {
      title: "Amara and David's Wedding",
      text: "You are invited! View the wedding details and RSVP:",
      url: window.location.href,
    };

    if (navigator.share) {
      navigator.share(shareData);
    } else {
      navigator.clipboard.writeText(shareData.url);
      alert("Link copied to clipboard!");
    }
  };

  // TEXT VERSION (for desktop nav)
  if (variant === "text") {
    return (
      <span
        onClick={handleShare}
        className="cursor-pointer hover:text-[#f1b42f] transition"
      >
        SEND INVITE
      </span>
    );
  }

  // DEFAULT BUTTON VERSION (footer / mobile)
  return (
    <div className="flex justify-center">
      <button
        onClick={handleShare}
        className="mt-6 border-2 border-[#f1b42f] text-[#f1b42f] bg-transparent px-6 py-3 rounded-full font-bold hover:bg-[#f1b42f] hover:text-white transition-all duration-200 text-base flex items-center gap-2"
      >
        <span>Send Wedding Invite</span>
        <span>📩</span>
      </button>
    </div>
  );
};

export default ShareButton;
