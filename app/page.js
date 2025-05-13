import Link from 'next/link';
import './home.css'
import Image from 'next/image';
import { assests } from "./volunteer/assest/assest";

export default function AccountTypeSelection() {
  return (
    <div className="account-type-container">
      <Image src={assests.account}  alt="Account Illustration" className="illustration" />
      <h1 className="title">Account Type</h1>
      <p className="subtitle">Click your role to continue to your dashboard.</p>
      <div className="card-options">
       <Link href={'./volunteer/loginpage'}>
       <div className="card">
          <h2>Volunteer</h2>
        </div>
       </Link>
       <Link href={'#'}>
       <div className="card">
          <h2>Admin</h2>
        </div>
       </Link>
      <Link href={'#'}>
      <div className="card">
          <h2>Trustee</h2>
        </div>
      </Link>
      </div>
    </div>
  );
}

