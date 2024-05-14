import React, { useState } from 'react';
import { getProviderOrSigner } from '../utils/getWeb3';
import { submitExploit } from '../api/exploitAPI';

function SubmitExploitForm() {
    const [exploitData, setExploitData] = useState('');
    const [proof, setProof] = useState('');
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);

        try {
            const signer = await getProviderOrSigner(true);
            const tx = await submitExploit(exploitData, proof, signer);
            console.log('Transaction:', tx);
            alert('Exploit submitted successfully!');
        } catch (error) {
            console.error('Error submitting exploit:', error);
            alert('Submission failed.');
        }

        setLoading(false);
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label>Exploit Data:</label>
                <textarea value={exploitData} onChange={e => setExploitData(e.target.value)} required />
            </div>
            <div>
                <label>Proof:</label>
                <input type="text" value={proof} onChange={e => setProof(e.target.value)} required />
            </div>
            <button type="submit" disabled={loading}>
                {loading ? 'Submitting...' : 'Submit'}
            </button>
        </form>
    );
}

export default SubmitExploitForm;
