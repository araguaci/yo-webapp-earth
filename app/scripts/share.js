import Share from 'react-native-share';

const url = 'https://awesome.contents.com/';
const title = 'Awesome Contents';
const message = 'Please check this out.';
const icon = 'data:<data_type>/<file_extension>;base64,<base64_data>';

Share.open(options)
.then((res) => {
  console.log(res);
})
.catch((err) => {
  err && console.log(err);
});
