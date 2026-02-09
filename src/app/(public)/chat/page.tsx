export default async function PublicChatPage() {
  return (
    <div className="h-screen w-full flex flex-col">
      <div className="flex-1 overflow-hidden">
        <iframe
          src="/"
          className="w-full h-full border-0"
          sandbox="allow-same-origin allow-scripts allow-forms allow-popups"
        />
      </div>
    </div>
  );
}
