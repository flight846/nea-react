import moment from 'moment';

const dataSuccess = [
  {
    errorMessageList: [''],
    status: 'Pass',
    sampleVO: {
      barcodeId: 'CRO-A123456-19',
      senderName: 'Ben Wong',
      sendDateTime: '12/09/2019 04:44 AM',
      sendDate: '12/09/2019',
      sendTime: '04:44 AM',
      senderContactNo: '32324333',
      regionOfficeCode: 'CRO',
      isUrgentCase: true,
      sampleStatusDesc: 'Sending to EHI',
      sampleId: 'HH02-M06-300119',
    },
  },
  {
    errorMessageList: [''],
    status: 'Pass',
    sampleVO: {
      barcodeId: 'CRO-A123456-20',
      senderName: 'Ben Wong',
      sendDateTime: '07/10/2019 06:28 AM',
      sendDate: '07/10/2019',
      sendTime: '06:28 AM',
      senderContactNo: '32324333',
      regionOfficeCode: 'CRO',
      isUrgentCase: false,
      sampleStatusDesc: 'Sending to EHI',
      sampleId: 'HH02-M06-300120',
    },
  },
  {
    errorMessageList: [''],
    status: 'Pass',
    sampleVO: {
      barcodeId: 'CRO-A123456-21',
      senderName: 'Ben Wong',
      sendDateTime: '15/02/2019 09:00 PM',
      sendDate: '15/02/2019',
      sendTime: '21:00 PM',
      senderContactNo: '32324333',
      regionOfficeCode: 'CRO',
      isUrgentCase: false,
      sampleStatusDesc: 'Sending to EHI',
      sampleId: 'HH02-M06-300119',
    },
  },
  {
    errorMessageList: [''],
    status: 'Pass',
    sampleVO: {
      barcodeId: 'CRO-A123456-22',
      senderName: 'Ben Wong',
      sendDateTime: '25/06/2019 07:46 PM',
      sendDate: '25/06/2019',
      sendTime: '07:46 PM',
      senderContactNo: '32324333',
      regionOfficeCode: 'CRO',
      isUrgentCase: true,
      sampleStatusDesc: 'Sending to EHI',
      sampleId: 'HH02-M06-300119',
    },
  },
  {
    errorMessageList: [''],
    status: 'Pass',
    sampleVO: {
      barcodeId: 'CRO-A123456-23',
      senderName: '',
      sendDateTime: '',
      sendDate: '',
      sendTime: '',
      senderContactNo: '',
      regionOfficeCode: 'CRO',
      isUrgentCase: false,
      sampleStatusDesc: 'Collected',
      sampleId: 'HH02-M06-300119',
    },
  },
];

const dataError = {
  errorMessageList: ['Barcode not valid.'],
  status: 'Fail',
  sampleIdMgmtVO: null,
  requestBody: null,
};

let returnedIndex = [];

const resetRandom = () => {
  returnedIndex = [];
};

const randomData = () => {
  if (returnedIndex.length === dataSuccess.length) {
    return dataError;
  }
  const min = 0;
  const max = dataSuccess.length - 1;
  let rand = 0;
  do {
    rand = Math.floor(Math.random() * (max - min + 1) + min);
    if (!returnedIndex.includes(rand)) {
      returnedIndex.push(rand);
      return dataSuccess[rand];
    }
  } while (returnedIndex.includes(rand));
};

const getSample = barcodeId => {
  const index = dataSuccess.findIndex(item => item.sampleVO.barcodeId === barcodeId);
  if (index > -1) {
    const sample = dataSuccess[index];
    sample.sampleVO.scannedTime = moment();
    return sample;
  }
  return {
    errorMessageList: ['Invalid Barcode Id'],
    status: 'Fail',
    sampleVO: null,
  };
};

export { randomData, resetRandom, getSample };
