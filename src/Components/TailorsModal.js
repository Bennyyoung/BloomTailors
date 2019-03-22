import React from 'react';
import { Modal, Button, Avatar, Rate } from 'antd';
import '../Styles/Components/TailorModal.css';

class TailorsModal extends React.Component {
  state = { visible: false }

  showModal = () => {
    this.setState({
      visible: true,
    });
  }

  handleOk = (e) => {
    console.log(e);
    this.setState({
      visible: false,
    });
  }

  handleCancel = (e) => {
    console.log(e);
    this.setState({
      visible: false,
    });
  }

  render() {
    return (
      <div>
        <Button type="primary" onClick={this.showModal}>
          Preview
        </Button>
        <Modal
          title="Tailor"
          visible={this.state.visible}
          onOk={this.handleOk}
          onCancel={this.handleCancel}
          centered={true}
          width="800px"
        >
        <div>
              <Avatar size={100} icon="user" />
        </div>
          <p style={{fontFamily: 'Helvetica', fontWeight: 'bold', fontSize: '20px'}}>
            Hey, I'm Patrick
          </p>
          <p>Location: Rumuagholu, PortHarcourt</p>
          <Rate allowHalf defaultValue={2.5} />
          <p>Tailor holder for <b>2 months</b></p>
        </Modal>
      </div>
    );
  }
}

export default TailorsModal