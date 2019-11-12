import React, { Component } from 'react';
import Carousel, { Modal, ModalGateway } from 'react-images';
import BinaryImage from 'components/common/binaryImage';

class BinaryImageGallery extends Component {
  constructor(props) {
    super(props);
    const { fileIdList } = props;
    this.state = {
      isOpen: false,
      currentIndex: 0,
      imageSrcs: (fileIdList || []).map(() => ({ src: '' })),
    };
  }

  toggleGallery = index => {
    this.setState(state => ({ isOpen: !state.isOpen, currentIndex: index || 0 }));
  };

  onImageLoaded = (src, index) => {
    const { imageSrcs } = this.state;
    imageSrcs[index] = { src };
    this.setState({
      imageSrcs,
    });
  };

  render() {
    const { isOpen, currentIndex, imageSrcs } = this.state;
    const { className, fileIdList } = this.props;
    console.log(currentIndex);
    return (
      <div className={className}>
        {fileIdList &&
          fileIdList.map((fileId, fIndex) => (
            <BinaryImage
              key={`review_gallery_image_${fIndex + 1}`}
              className="img-thumbnail"
              fileId={fileId}
              onImageLoaded={src => this.onImageLoaded(src, fIndex)}
              onClick={() => this.toggleGallery(fIndex)}
            />
          ))}
        <ModalGateway>
          {isOpen ? (
            <Modal
              onClose={() => this.toggleGallery(0)}
              styles={{
                blanket: (base, state) => ({ ...base, zIndex: 1100 }),
                positioner: (base, state) => ({ ...base, zIndex: 1110 }),
                dialog: (base, state) => ({ ...base, zIndex: 1120 }),
              }}
            >
              <Carousel views={imageSrcs} currentIndex={currentIndex} />
            </Modal>
          ) : null}
        </ModalGateway>
      </div>
    );
  }
}

export default BinaryImageGallery;
