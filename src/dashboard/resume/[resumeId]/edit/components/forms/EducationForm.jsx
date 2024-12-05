import { Input } from '../../../../../../components/ui/input';
import React from 'react'

function EducationForm() {
    return (
        <div>
            <div className='p-5 border-t-4 shadow-lg rounded-lg mt-10 border-t-primary' >
                <h2 className='font-bold text-lg '>Education Details</h2>
                <p>Add your education details</p>
            </div>
            <div className='grid grid-cols-2 gap-3 border p-3 my-5 rounder-lg'>

                <div>
                    <label className='text-xs'>Univerity Name</label>
                    <Input name='universityName' />
                </div>
                <div>
                    <label className='text-xs'>degree</label>
                    <Input name='degree' />
                </div>
                <div>
                    <label className='text-xs'>Start Date</label>
                    <Input name='startDate' />
                </div>
                <div>
                    <label className='text-xs'>End Date</label>
                    <Input name='endDate' />
                </div>
                <div>
                    <label className='text-xs'>Major</label>
                    <Input name='major' />
                </div>
                <div>
                    <label className='text-xs'>Description</label>
                    <Input name='description' />
                </div>

            </div>

            {/* <div className='flex  justify-between mt-7'>
                <div  className='flex gap-4'>

                    <Button variant="outline" onClick={AddExperience} className='text-primary' > + Add More Experience </Button>
                    <Button variant="outline" onClick={RemoveExperience} className="text-primary"> - Remove</Button>
                </div>
                <Button type="submit" onClick={handleSubmit} disabled={loading}>
                    {loading? <LoaderCircle className='animate-spin'/> : 'Save'}
                </Button>
            </div> */}
        </div>
    )
}

export default EducationForm
