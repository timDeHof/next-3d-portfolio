import { NextApiRequest, NextApiResponse } from 'next';
import { updateCache } from '../../utils/cacheUpdater';

const SECRET_TOKEN = 'YOUR_SECRET_TOKEN';

export default async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === 'POST') {
    const token = req.headers['x-secret-token'] || '';

    if (token !== SECRET_TOKEN) {
      return res.status(403).send('Forbidden');
    }

    try {
      await updateCache();
      res.status(200).send('Cache updated successfully');
    } catch (error) {
      console.error('Error updating cache:', error);
      res.status(500).send('Error updating cache');
    }
  } else {
    res.status(405).send('Method not allowed');
  }
};
