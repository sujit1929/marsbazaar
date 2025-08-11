export default function MobileHeader() {
  return (
    <>
      <div className="md:hidden">
        <div className="text-xs px-1 pb-0">Shop By</div> {/* Removed extra padding */}
        <div className="flex gap-4 text-base px-2 mt-0"> {/* Removed top margin */}
          <div className="text-[#FF9900]">Category</div>
          <div>Deals</div>
          <div>Sell</div>
        </div>
      </div>


    </>
  );
}
