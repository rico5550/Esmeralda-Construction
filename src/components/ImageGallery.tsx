import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, X, ZoomIn, ZoomOut } from 'lucide-react';

interface ImageGalleryProps {
    isOpen: boolean;
    onClose: () => void;
    images: string[];
    initialIndex?: number;
}

const ImageGallery: React.FC<ImageGalleryProps> = ({
    isOpen,
    onClose,
    images,
    initialIndex = 0
}) => {
    const [currentIndex, setCurrentIndex] = useState(initialIndex);
    const [zoomLevel, setZoomLevel] = useState(1);
    const [imagePosition, setImagePosition] = useState({ x: 0, y: 0 });
    const [isDragging, setIsDragging] = useState(false);
    const [dragStart, setDragStart] = useState({ x: 0, y: 0 });

    useEffect(() => {
        setCurrentIndex(initialIndex);
    }, [initialIndex]);

    // Reset zoom when changing images
    useEffect(() => {
        setZoomLevel(1);
        setImagePosition({ x: 0, y: 0 });
    }, [currentIndex]);

    const nextImage = () => {
        setCurrentIndex((prev) => (prev + 1) % images.length);
    };

    const prevImage = () => {
        setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
    };

    const goToImage = (index: number) => {
        setCurrentIndex(index);
    };

    const zoomIn = () => {
        setZoomLevel(prev => Math.min(prev * 1.5, 4)); // Max zoom 4x
    };

    const zoomOut = () => {
        setZoomLevel(prev => {
            const newZoom = prev / 1.5;
            if (newZoom <= 1) {
                setImagePosition({ x: 0, y: 0 }); // Reset position when fully zoomed out
                return 1;
            }
            return newZoom;
        });
    };

    const handleImageClick = (e: React.MouseEvent) => {
        if (zoomLevel === 1) {
            zoomIn();
        }
    };

    const handleMouseDown = (e: React.MouseEvent) => {
        if (zoomLevel > 1) {
            setIsDragging(true);
            setDragStart({
                x: e.clientX - imagePosition.x,
                y: e.clientY - imagePosition.y
            });
        }
    };

    const handleMouseMove = (e: React.MouseEvent) => {
        if (isDragging && zoomLevel > 1) {
            setImagePosition({
                x: e.clientX - dragStart.x,
                y: e.clientY - dragStart.y
            });
        }
    };

    const handleMouseUp = () => {
        setIsDragging(false);
    };

    // Keyboard navigation and prevent background scroll
    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (!isOpen) return;

            switch (e.key) {
                case 'ArrowLeft':
                    prevImage();
                    break;
                case 'ArrowRight':
                    nextImage();
                    break;
                case 'Escape':
                    onClose();
                    break;
            }
        };

        if (isOpen) {
            // Prevent background scrolling
            document.body.style.overflow = 'hidden';
            document.addEventListener('keydown', handleKeyDown);
        } else {
            // Restore background scrolling
            document.body.style.overflow = 'unset';
        }

        return () => {
            document.removeEventListener('keydown', handleKeyDown);
            document.body.style.overflow = 'unset';
        };
    }, [isOpen]);

    if (!isOpen) return null;

    return (
        <div
            className="fixed inset-0 bg-black/90 z-50 overflow-y-auto"
            role="dialog"
            aria-modal="true"
            aria-labelledby="gallery-title"
            aria-describedby="gallery-description"
        >
            {/* Close button */}
            <button
                onClick={onClose}
                className="fixed top-6 right-6 text-white hover:text-gray-300 transition-colors z-10"
                aria-label="Close image gallery"
            >
                <X size={32} />
            </button>

            {/* Hidden title and description for screen readers */}
            <h2 id="gallery-title" className="sr-only">Image Gallery</h2>
            <div id="gallery-description" className="sr-only">
                Use arrow keys to navigate between images, or press Escape to close.
            </div>

            {/* Main container - now scrollable */}
            <div className="min-h-full flex flex-col items-center justify-center py-8 px-4">
                {/* Image display area with flexible sizing */}
                <div className="relative flex items-center justify-center w-full max-w-6xl mb-8">
                    {/* Previous button */}
                    <button
                        onClick={prevImage}
                        className="absolute left-4 z-10 bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white p-3 rounded-full transition-all duration-300"
                        disabled={images.length <= 1}
                        aria-label="Previous image"
                    >
                        <ChevronLeft size={24} />
                    </button>

                    {/* Main image container with zoom functionality */}
                    <div
                        className="relative flex items-center justify-center w-full overflow-hidden rounded-lg group"
                        style={{ cursor: zoomLevel > 1 ? (isDragging ? 'grabbing' : 'grab') : 'zoom-in' }}
                    >
                        <img
                            src={images[currentIndex]}
                            alt={`Gallery image ${currentIndex + 1}`}
                            className="max-w-full max-h-[75vh] md:max-h-[70vh] object-contain rounded-lg shadow-2xl transition-transform duration-200"
                            style={{
                                transform: `scale(${zoomLevel}) translate(${imagePosition.x / zoomLevel}px, ${imagePosition.y / zoomLevel}px)`,
                                transformOrigin: 'center center'
                            }}
                            onClick={handleImageClick}
                            onMouseDown={handleMouseDown}
                            onMouseMove={handleMouseMove}
                            onMouseUp={handleMouseUp}
                            onMouseLeave={handleMouseUp}
                            draggable={false}
                        />

                        {/* Zoom controls - appear on hover */}
                        <div className="absolute top-4 left-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex gap-2">
                            <button
                                onClick={zoomIn}
                                disabled={zoomLevel >= 4}
                                className="bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white p-2 rounded-full transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                                aria-label="Zoom in"
                            >
                                <ZoomIn size={20} />
                            </button>
                            <button
                                onClick={zoomOut}
                                disabled={zoomLevel <= 1}
                                className="bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white p-2 rounded-full transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                                aria-label="Zoom out"
                            >
                                <ZoomOut size={20} />
                            </button>
                            {zoomLevel > 1 && (
                                <div className="bg-white/20 backdrop-blur-sm text-white px-3 py-2 rounded-full text-sm font-medium">
                                    {Math.round(zoomLevel * 100)}%
                                </div>
                            )}
                        </div>

                        {/* Zoom hint */}
                        {zoomLevel === 1 && (
                            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                <div className="bg-white/20 backdrop-blur-sm text-white px-3 py-1 rounded-full text-sm">
                                    Click to zoom
                                </div>
                            </div>
                        )}
                    </div>

                    {/* Next button */}
                    <button
                        onClick={nextImage}
                        className="absolute right-4 z-10 bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white p-3 rounded-full transition-all duration-300"
                        disabled={images.length <= 1}
                        aria-label="Next image"
                    >
                        <ChevronRight size={24} />
                    </button>
                </div>

                {/* Fixed thumbnail section */}
                <div className="w-full max-w-4xl bg-black/50 backdrop-blur-sm rounded-lg p-4">
                    <div className="flex items-center justify-center mb-4">
                        <span className="text-white text-sm font-medium">
                            {currentIndex + 1} of {images.length}
                        </span>
                    </div>

                    <div className="grid grid-cols-8 md:grid-cols-12 lg:grid-cols-16 gap-2 max-h-32 overflow-y-auto rounded">
                        {images.map((image, index) => (
                            <button
                                key={index}
                                onClick={() => goToImage(index)}
                                className={`aspect-square rounded-md overflow-hidden border-2 transition-all duration-200 ${index === currentIndex
                                    ? 'border-white ring-2 ring-white/50'
                                    : 'border-white/30 hover:border-white/60'
                                    }`}
                            >
                                <img
                                    src={image}
                                    alt={`Thumbnail ${index + 1}`}
                                    className="w-full h-full object-cover"
                                />
                            </button>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ImageGallery; 