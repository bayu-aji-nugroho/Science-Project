'use client';

import React, { useState } from 'react';
import { ArrowLeft, ArrowRight, CheckCircle, XCircle, RotateCcw } from 'lucide-react';
import 'katex/dist/katex.min.css';
import { BlockMath } from 'react-katex';

// --- DATA SOAL ---
// Anda bisa mengganti ini dengan data dari API atau CMS
const quizData = [
  {
    question: "3^5 \\times 3^6 = ... ",
    options: ["3^{11}", "3^{12}", "3", "3^{30}"],
    correctAnswerIndex: 0,
    explanation: "-"
  },
  {
    question: "8^{-9} \\times 8^2 = ...",
    options: ["8^-10", "8^{-18}", "2^{-21}", "8^7"],
    correctAnswerIndex: 2,
    explanation: "-"
  },
  
];

export default function ExamLine () {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState({});
  const [showScore, setShowScore] = useState(false);
  const [score, setScore] = useState(0);

  const currentQuestion = quizData[currentQuestionIndex];
  const hasAnsweredCurrent = selectedAnswers[currentQuestionIndex] !== undefined;

  const handleOptionSelect = (optionIndex) => {
    if (hasAnsweredCurrent) return; // Mencegah perubahan jawaban

    const isCorrect = optionIndex === currentQuestion.correctAnswerIndex;
    if (isCorrect) {
      setScore(prev => prev + 1);
    }

    setSelectedAnswers(prev => ({
      ...prev,
      [currentQuestionIndex]: optionIndex,
    }));
  };

  const goToNextQuestion = () => {
    if (currentQuestionIndex < quizData.length - 1) {
      setCurrentQuestionIndex(prev => prev + 1);
    } else {
      setShowScore(true);
    }
  };

  const goToPrevQuestion = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(prev => prev - 1);
    }
  };
  
  const restartQuiz = () => {
    setCurrentQuestionIndex(0);
    setSelectedAnswers({});
    setScore(0);
    setShowScore(false);
  };

  if (showScore) {
    return (
      <div className="bg-white dark:bg-slate-800 shadow-xl rounded-2xl p-6 sm:p-8 mx-auto text-center border border-slate-200 dark:border-slate-700">
        
        <h2 className="text-2xl sm:text-3xl font-bold text-slate-800 dark:text-slate-100 mb-2">Kuis Selesai!</h2>
        <p className="text-slate-600 dark:text-slate-300 mb-6">Skor akhir kamu adalah:</p>
        <div className="bg-blue-500 text-white rounded-full w-32 h-32 flex items-center justify-center mx-auto mb-6 flex-col shadow-lg">
          <span className="text-4xl font-bold">{score}</span>
          <span className="text-lg">/ {quizData.length}</span>
        </div>
        <button
          onClick={restartQuiz}
          className="flex items-center justify-center gap-2 w-full sm:w-auto mx-auto px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-800 transition-all duration-300"
        >
          <RotateCcw size={18} />
          Ulangi Kuis
        </button>
      </div>
    );
  }

  return (
    <div className="border rounded-2xl border-teal-300/30 bg-gray-800/50 backdrop-blur-sm shadow-lg p-4 sm:p-8 w-full">
      {/* Header Soal */}
      <div className="mb-6">
        <p className="text-sm font-semibold text-blue-600 dark:text-blue-400">Soal {currentQuestionIndex + 1} dari {quizData.length}</p>
        <div className="w-full bg-slate-200 dark:bg-slate-700 rounded-full h-2.5 mt-2">
          <div 
            className="bg-gradient-to-r from-lime-700 via-lime-500 to-lime-300  h-2.5 rounded-full transition-all duration-500 ease-in-out" 
            style={{ width: `${((currentQuestionIndex + 1) / quizData.length) * 100}%` }}>
          </div>
        </div>
      </div>
      
      {/* Pertanyaan dengan KaTeX */}
      <div className="text-lg sm:text-xl text-slate-800 dark:text-slate-100 mb-8 min-h-[60px] flex items-center justify-center text-center overflow-x-auto">
        <BlockMath math={currentQuestion.question} /> 
      </div>

      {/* Opsi Jawaban */}
      <div className="grid grid-cols-2 gap-2">
        {currentQuestion.options.map((option, index) => {
          const isSelected = selectedAnswers[currentQuestionIndex] === index;
          const isCorrect = currentQuestion.correctAnswerIndex === index;
          
          let optionClass = "border-slate-300 dark:border-slate-600 hover:border-blue-500 dark:hover:border-blue-500 hover:bg-blue-50 dark:hover:bg-slate-800";
          if (hasAnsweredCurrent) {
            if (isCorrect) {
              optionClass = "border-green-500 bg-green-50 dark:bg-green-900/50 text-green-800 dark:text-green-300";
            } else if (isSelected) {
              optionClass = "border-red-500 bg-red-50 dark:bg-red-900/50 text-red-800 dark:text-red-400";
            } else {
               optionClass = "border-slate-300 dark:border-slate-600 opacity-60";
            }
          }

          return (
            <button
              key={index}
              onClick={() => handleOptionSelect(index)}
              disabled={hasAnsweredCurrent}
              className={`flex items-center justify-between w-full p-2 rounded-lg border-2 text-left transition-all duration-300 ${optionClass} ${!hasAnsweredCurrent && "cursor-pointer"}`}
            >
              <span className="font-medium text-slate-700 dark:text-slate-200"><BlockMath math={option} /></span>
              {hasAnsweredCurrent && isCorrect && <CheckCircle className="text-green-500" />}
              {hasAnsweredCurrent && isSelected && !isCorrect && <XCircle className="text-red-500" />}
            </button>
          );
        })}
      </div>
      
      {/* Penjelasan Jawaban */}
      {hasAnsweredCurrent && (
        <div className="mt-6 p-4 bg-slate-100 dark:bg-slate-800 rounded-lg text-slate-700 dark:text-slate-300">
            <h3 className="font-bold text-md mb-1">Penjelasan:</h3>
            <p>{currentQuestion.explanation}</p>
        </div>
      )}

      {/* Navigasi */}
      <div className="flex justify-between items-center mt-4 pt-3 border-t border-slate-200 dark:border-slate-700">
        <button
          onClick={goToPrevQuestion}
          disabled={currentQuestionIndex === 0}
          className="flex items-center gap-2 px-4 py-2 font-semibold text-slate-600 dark:text-slate-300 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
        >
          <ArrowLeft size={16} />
          Kembali
        </button>
        <button
          onClick={goToNextQuestion}
          disabled={!hasAnsweredCurrent}
          className="flex items-center gap-2 px-5 py-2 font-semibold text-white bg-blue-600 rounded-lg hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed disabled:bg-slate-400 dark:disabled:bg-slate-600 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
        >
          {currentQuestionIndex === quizData.length - 1 ? 'Lihat Skor' : 'Lanjut'}
          <ArrowRight size={16} />
        </button>
      </div>
    </div>
  );
};

