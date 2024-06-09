import Footer from '@/Components/Footer';
import Header from '@/Components/Header';
import React from 'react';

const about = () => {
  return (
    <>
      <Header />
      <div className="px-8 lg:px-24 py-8 space-y-2 text-justify">
        <h className='text-xl font-semibold uppercase mb-4'>
          ABOUT US
        </h>
        <p className="mb-6 ">
          Golden Supervision Academy is established by a team of professionals having expertise in the educational sector. Our School offers a Nursery to 10 preparatory program that helps students to become independent, self-aware thinkers possessing deep understandings and powerful learning skills. Golden Supervision Academy has earned its reputation as one of the best educational institutions.
         </p>
        <h5 className="text-xl font-semibold uppercase mb-4">
          Our Mission
        </h5>
        <p className="mb-6">
          Golden Supervision Academy is a multicultural community in the foothills of the Himalaya that inspires in each student a passion for learning, the confidence and competence to pursue their dreams, and the commitment to serve as a compassionate global citizen and leader, who is a steward of the environment.
        </p>
        <h1 className="text-2xl font-semibold uppercase mb-4">
          Valuables
        </h1>
        <p className="mb-6">
          Parents, guardians and caretakers are kindly informed not to give valuable articles like costly watches, tape-recorders or CD players, cameras, gold/silver/diamond rings, mobile sets, etc. to their wards when they come to the school. The school does not take any responsibility for the loss or damage of such valuables by any means.
          <br />
          <span className="font-semibold">Note:</span> Mobile phone is strictly prohibited inside the school premises, during school hour.
        </p>
        <h2 className="text-xl font-semibold uppercase mb-4">
          Breach of Code of Conduct
        </h2>
        <p className="mb-6">
          If a student is found guilty of a serious breach of code of conduct, they will be expelled from the School without any liability on the part of the school.
          <br />
          The code of conduct to be maintained by a student is generally provided on the Admission Day.
        </p>
        <h3 className="text-xl font-semibold uppercase mb-4">
          Recommendations to Parents or Guardians
        </h3>
        <ul className="list-disc pl-5 mb-6">
          <li className="mb-2">Parents/guardians are requested to study the progress cards (results) of their wards and watch their progress minutely.</li>
          <li className="mb-2">In case parents/guardians feel that their ward is not making satisfactory progress, they ought to contact the principal.</li>
          <li className="mb-2">Parents/guardians are requested to bring all legitimate complaints to the notice of the principal.</li>
          <li className="mb-2">Parents/guardians are requested to make sure that their wards return to school in time after the vacations or home leave.</li>
        </ul>
        <h4 className="text-xl font-semibold uppercase mb-4">
          Leave Provision
        </h4>
        <ul className="list-disc pl-5 mb-6 ">
          <li className="mb-2">Ordinarily, no leave will be granted during the regular class time and it should not be asked for except under very special circumstances.</li>
          <li className="mb-2">Leave for religious functions and marriages should be avoided as far as possible. When it is absolutely necessary, home leave for two days, exclusive of journey time, may be granted in the case of marriage of the first relatives if applied for in advance, accompanied by the printed invitation card.</li>
          <li className="mb-2">Leave for two days plus the time of travel will also be sanctioned to offer condolence to immediate relatives. Normally, no leave will be granted during the examination.</li>
          <li className="mb-2">If a student remains absent without information for one week or more after a certain vacation or expiry of home leave, his/her name will be struck off the rolls from the register book.</li>
          <li className="mb-2">If a student is not able to join the school after a certain vacation due to unforeseen circumstances, the school may consider the case, but an application along with parents’/guardians’ approved signature must be produced upon demand.</li>
        </ul>
      </div>
      <Footer />
    </>
  );
}

export default about;
