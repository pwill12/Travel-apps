import * as React from 'react';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Autocomplete from '@mui/material/Autocomplete';
import { InputAdornment } from '@mui/material';
import { MdAccountCircle } from 'react-icons/md';


type setinputprops = {
  setinput: React.Dispatch<React.SetStateAction<string | null>>
}

const Options = [
  'lagos',
  'abuja',
  'Ibadan',
  'Rivers',
  'warri',
  'kano'
]
export default function AutocompleteInput({setinput} : setinputprops) {

  // const [input1, setinput1] = React.useState<string | null>(null);
  // console.log(input1)

  return (
    <div className='InputM'>
    {/* <Stack spacing={0} sx={{ width: 150 }} className='InputM'> */}
      <Autocomplete
        id="free-solo-demo"
        freeSolo
        // value={value}
        onChange={(event: any, newValue: string | null) => {
          setinput(newValue);
        }}
        options={Options.map((option) => option)}
        renderInput={(params) => <TextField {...params}
        placeholder='Type to Search'
        />}
      />
    {/* </Stack> */}
    </div>
  );
}

