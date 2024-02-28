// CallToAction.jsx
import { Button } from 'flowbite-react';

export default function CallToAction() {
  return (
    <div className='flex flex-col sm:flex-row p-3 border border-teal-500 justify-center items-center rounded-tl-3xl rounded-br-3xl text-center'>
        <div className="flex-1 justify-center flex flex-col">
            <h2 className='text-2xl'>
                Want to connect with us?
            </h2>
            <p className='text-gray-500 my-2'>
                Checkout our company on Facebook
            </p>
            <Button gradientDuoTone='purpleToPink' className='rounded-tl-xl rounded-bl-none'>
                <a href="https://www.facebook.com/profile.php?id=61553784651577" target='_blank' rel='noopener noreferrer'>
                    KOLOGIC Technologies
                </a>
            </Button>
        </div>
        <div className="p-7 flex-1">
            <img src="https://scontent.fcmb1-2.fna.fbcdn.net/v/t39.30808-6/402131082_3425773277661058_6559742975011305515_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=783fdb&_nc_ohc=Wn6aZcbF90AAX-_TCMo&_nc_ht=scontent.fcmb1-2.fna&oh=00_AfDNU4bPo-XfNaGFgyYoWIDI9glxqJRf2cpboZAg8uJWUg&oe=65E1A1AF" alt="Facebook" />
        </div>
    </div>
  );
}
