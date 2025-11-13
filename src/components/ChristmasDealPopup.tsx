import { X, Gift, Sparkles, FileText } from 'lucide-react';

interface ChristmasDealPopupProps {
  isOpen: boolean;
  onClose: () => void;
  onGetQuote?: () => void;
}

export default function ChristmasDealPopup({ isOpen, onClose, onGetQuote }: ChristmasDealPopupProps) {
  if (!isOpen) return null;

  const handleClose = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    onClose();
  };

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div
      className="fixed inset-0 bg-black/70 z-[150] flex items-center justify-center p-3 sm:p-4 animate-fade-in backdrop-blur-sm"
      onClick={handleBackdropClick}
    >
      <div
        className="bg-white rounded-2xl shadow-2xl max-w-lg w-full overflow-hidden transform animate-scale-in relative"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="relative bg-gradient-to-br from-red-600 via-red-500 to-red-700 text-white p-5 sm:p-6">
          <button
            onClick={handleClose}
            className="absolute top-3 right-3 bg-white/20 hover:bg-white/30 backdrop-blur-md text-white rounded-full p-1.5 transition-all duration-300 hover:scale-110 hover:rotate-90 z-[200] cursor-pointer"
            aria-label="Close"
            type="button"
          >
            <X size={20} />
          </button>

          <div className="relative z-10 text-center">
            <div className="flex justify-center mb-2">
              <div className="bg-white/20 backdrop-blur-md rounded-full p-2.5">
                <Gift size={32} className="text-white" />
              </div>
            </div>

            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-2 flex items-center justify-center gap-2">
              <Sparkles className="text-yellow-300" size={20} />
              Christmas Deal!
              <Sparkles className="text-yellow-300" size={20} />
            </h2>

            <p className="text-sm sm:text-base font-semibold text-red-100 mb-3">
              Special Holiday Offer on All Services
            </p>

            <div className="bg-white/10 backdrop-blur-md rounded-lg p-3 border border-white/30 mb-3">
              <p className="text-xs sm:text-sm text-white font-medium leading-relaxed">
                Transform your home this holiday season! Get premium remodeling at special rates.
              </p>
            </div>

            <div className="inline-flex items-center gap-1.5 bg-white/20 backdrop-blur-md px-3 py-1.5 rounded-lg text-white">
              <span className="text-xs font-semibold">⏰ Valid Until:</span>
              <span className="text-xs sm:text-sm font-bold">Dec 31, 2025</span>
            </div>
          </div>
        </div>

        <div className="p-5 sm:p-6 bg-gradient-to-br from-gray-50 to-white">
          <div className="grid grid-cols-3 gap-2 sm:gap-3 mb-4">
            <div className="text-center p-2 bg-white rounded-lg shadow-md border border-red-100">
              <div className="text-xl mb-0.5">🏠</div>
              <h3 className="font-bold text-gray-900 text-xs leading-tight">Kitchen</h3>
            </div>

            <div className="text-center p-2 bg-white rounded-lg shadow-md border border-red-100">
              <div className="text-xl mb-0.5">🛁</div>
              <h3 className="font-bold text-gray-900 text-xs leading-tight">Bathroom</h3>
            </div>

            <div className="text-center p-2 bg-white rounded-lg shadow-md border border-red-100">
              <div className="text-xl mb-0.5">🎨</div>
              <h3 className="font-bold text-gray-900 text-xs leading-tight">Full Home</h3>
            </div>
          </div>

          <div className="space-y-2">
            <a
              href="tel:8563983087"
              className="block w-full bg-gradient-to-r from-red-600 to-red-700 text-white px-4 py-2.5 rounded-lg font-bold text-center hover:from-red-700 hover:to-red-800 transition-all duration-300 hover:shadow-xl text-sm"
            >
              📞 Call: (856) 398-3087
            </a>

            {onGetQuote && (
              <button
                onClick={() => {
                  onClose();
                  onGetQuote();
                }}
                type="button"
                className="w-full bg-primary text-white px-4 py-2.5 rounded-lg font-bold text-center hover:bg-primary-dark transition-all duration-300 hover:shadow-xl inline-flex items-center justify-center gap-2 text-sm cursor-pointer"
              >
                <FileText size={16} />
                Get Free Quote
              </button>
            )}

            <button
              onClick={handleClose}
              type="button"
              className="w-full bg-gray-200 text-gray-700 px-4 py-2 rounded-lg font-semibold hover:bg-gray-300 transition-all duration-300 text-sm cursor-pointer"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
