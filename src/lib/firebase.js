/**
 * M.S TIDALYN - Firebase Configuration & Services
 * Reusable client SDK initialization for Cloud Firestore and Authentication.
 */
import { initializeApp, getApps, getApp } from 'firebase/app';
import {
  getFirestore,
  collection,
  addDoc,
  serverTimestamp,
} from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID,
};

/**
 * Checks if the required Firebase environment variables are provided.
 */
export const isFirebaseConfigured = () => {
  return Boolean(
    firebaseConfig.apiKey &&
    firebaseConfig.projectId &&
    firebaseConfig.appId
  );
};

// Initialize Firebase safely (avoid duplicate app instances during HMR)
const app = isFirebaseConfigured()
  ? (getApps().length ? getApp() : initializeApp(firebaseConfig))
  : null;

export const db = app ? getFirestore(app) : null;
export const auth = app ? getAuth(app) : null;

/**
 * Validates and submits a business inquiry to Cloud Firestore
 * Collection: `projectInquiries`
 *
 * @param {Object} inquiryData
 * @param {string} inquiryData.name - Full Name (required)
 * @param {string} inquiryData.email - Work / School Email (required)
 * @param {string} [inquiryData.organization] - Company or School Name (optional)
 * @param {string} inquiryData.serviceInterest - Selected Service ID / Title
 * @param {string} [inquiryData.projectType] - Project Scope / Stage
 * @param {string} [inquiryData.budgetRange] - Estimated budget range
 * @param {string} inquiryData.message - Project details / requirements
 * @returns {Promise<{success: boolean, id: string}>}
 */
export async function submitProjectInquiry(inquiryData) {
  if (!isFirebaseConfigured() || !db) {
    throw new Error(
      'Firebase is not yet configured. Please set the VITE_FIREBASE_* environment variables in your .env file.'
    );
  }

  // Validate required inputs
  const fullName = (inquiryData.name || '').trim();
  const email = (inquiryData.email || '').trim().toLowerCase();
  const message = (inquiryData.message || '').trim();
  const serviceInterest = (inquiryData.serviceInterest || 'web-application-development').trim();
  const organization = (inquiryData.organization || '').trim();
  const projectType = (inquiryData.projectType || 'new-project').trim();
  const budgetRange = (inquiryData.budgetRange || '').trim();

  if (!fullName || fullName.length < 2) {
    throw new Error('Please enter your full name (at least 2 characters).');
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!email || !emailRegex.test(email)) {
    throw new Error('Please enter a valid email address.');
  }

  if (!message || message.length < 10) {
    throw new Error('Please provide at least 10 characters describing your project requirements.');
  }

  // Construct normalized payload for Firestore
  const payload = {
    fullName,
    email,
    organization: organization || 'Not specified',
    serviceInterest,
    projectType,
    budgetRange: budgetRange || 'Flexible / To be discussed',
    message,
    status: 'new', // Initial status required by security rules
    createdAt: serverTimestamp(),
    submittedAt: new Date().toISOString(),
    source: 'web_contact_form',
  };

  const inquiriesRef = collection(db, 'projectInquiries');
  const docRef = await addDoc(inquiriesRef, payload);

  return {
    success: true,
    id: docRef.id,
  };
}

export default app;
