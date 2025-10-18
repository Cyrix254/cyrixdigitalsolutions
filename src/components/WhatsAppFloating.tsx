import { MessageCircle, X } from 'lucide-react';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import siteData from '@/data/site.json';

const WhatsAppFloating = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Floating Button */}
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 1, type: 'spring', stiffness: 260, damping: 20 }}
        className="fixed bottom-6 right-6 z-50"
      >
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="p-4 bg-[#25D366] text-white rounded-full shadow-2xl hover:scale-110 transition-transform"
          aria-label="Chat on WhatsApp"
        >
          {isOpen ? <X className="w-6 h-6" /> : <MessageCircle className="w-6 h-6" />}
        </button>
      </motion.div>

      {/* Popup */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            transition={{ duration: 0.2 }}
            className="fixed bottom-24 right-6 z-50 w-80 max-w-[calc(100vw-3rem)]"
          >
            <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
              {/* Header */}
              <div className="bg-[#075E54] text-white p-4 flex items-center space-x-3">
                <div className="w-12 h-12 bg-gradient-to-br from-accent to-primary rounded-full flex items-center justify-center font-display font-bold text-xl">
                  C
                </div>
                <div>
                  <div className="font-semibold">Cyrix Digital Solutions</div>
                  <div className="text-xs text-green-200">Typically replies instantly</div>
                </div>
              </div>

              {/* Message */}
              <div className="p-4 bg-[#ECE5DD]">
                <div className="bg-white rounded-lg p-3 shadow-sm mb-3">
                  <p className="text-sm text-gray-800">
                    👋 Hi there! How can we help you today?
                  </p>
                </div>
                <div className="bg-white rounded-lg p-3 shadow-sm">
                  <p className="text-sm text-gray-800 mb-2">
                    Click the button below to start a conversation with us on WhatsApp.
                  </p>
                </div>
              </div>

              {/* Action Button */}
              <div className="p-4 bg-white border-t">
                <a
                  href={siteData.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center space-x-2 w-full px-4 py-3 bg-[#25D366] text-white rounded-lg hover:bg-[#128C7E] transition-colors font-medium"
                  onClick={() => setIsOpen(false)}
                >
                  <MessageCircle className="w-5 h-5" />
                  <span>Start Chat</span>
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default WhatsAppFloating;
