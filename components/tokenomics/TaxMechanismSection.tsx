'use client';

import { motion } from 'framer-motion';
import { ArrowDownRight, ArrowUpRight, Flame, Gift } from 'lucide-react';

export default function TaxMechanismSection() {
  const taxBreakdown = [
    {
      type: 'Buy Tax',
      icon: ArrowDownRight,
      total: '3%',
      breakdown: [
        { label: 'Auto-Burn', percentage: '1%', icon: Flame, color: 'text-red-500' },
        { label: 'Holder Rewards', percentage: '1%', icon: Gift, color: 'text-green-500' },
        { label: 'Marketing', percentage: '1%', icon: ArrowUpRight, color: 'text-blue-500' }
      ],
      bgColor: 'bg-green-50',
      borderColor: 'border-green-200'
    },
    {
      type: 'Sell Tax',
      icon: ArrowUpRight,
      total: '5%',
      breakdown: [
        { label: 'Auto-Burn', percentage: '2%', icon: Flame, color: 'text-red-500' },
        { label: 'Holder Rewards', percentage: '2%', icon: Gift, color: 'text-green-500' },
        { label: 'Marketing', percentage: '1%', icon: ArrowUpRight, color: 'text-blue-500' }
      ],
      bgColor: 'bg-orange-50',
      borderColor: 'border-orange-200'
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-brand-background to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-black text-brand-primary mb-4">
            TAX MECHANISM
          </h2>
          <p className="text-xl text-brand-secondary max-w-2xl mx-auto">
            Smart tax structure that benefits all holders while supporting ecosystem growth
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {taxBreakdown.map((tax, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className={`${tax.bgColor} ${tax.borderColor} border-2 rounded-2xl p-8 hover-lift shadow-lg`}
            >
              <div className="text-center mb-6">
                <div className="flex items-center justify-center space-x-3 mb-4">
                  <div className="bg-white/80 w-12 h-12 rounded-xl flex items-center justify-center">
                    <tax.icon className="h-6 w-6 text-brand-secondary" />
                  </div>
                  <h3 className="text-2xl font-bold text-brand-primary">
                    {tax.type}
                  </h3>
                </div>
                
                <div className="text-4xl font-black text-brand-accent mb-2">
                  {tax.total}
                </div>
                <p className="text-brand-secondary font-medium">
                  Total Transaction Fee
                </p>
              </div>

              <div className="space-y-4">
                {tax.breakdown.map((item, itemIndex) => (
                  <div
                    key={itemIndex}
                    className="bg-white/60 rounded-xl p-4 flex items-center justify-between"
                  >
                    <div className="flex items-center space-x-3">
                      <item.icon className={`h-5 w-5 ${item.color}`} />
                      <span className="font-semibold text-brand-secondary">
                        {item.label}
                      </span>
                    </div>
                    <span className="font-bold text-brand-primary text-lg">
                      {item.percentage}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-16 bg-white rounded-2xl p-8 shadow-lg border text-center max-w-4xl mx-auto"
        >
          <h3 className="text-2xl font-bold text-brand-primary mb-4">
            Why Different Tax Rates?
          </h3>
          <p className="text-lg text-brand-secondary leading-relaxed mb-6">
            Our tiered tax structure encourages holding while supporting the ecosystem. 
            Buy taxes are lower to welcome new members, while sell taxes provide additional 
            rewards for diamond hands who stay with us.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl p-4">
              <Flame className="h-6 w-6 text-red-500 mx-auto mb-2" />
              <div className="font-bold text-brand-primary">Auto-Burn</div>
              <div className="text-sm text-brand-secondary">Reduces supply</div>
            </div>
            <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl p-4">
              <Gift className="h-6 w-6 text-green-500 mx-auto mb-2" />
              <div className="font-bold text-brand-primary">Holder Rewards</div>
              <div className="text-sm text-brand-secondary">Passive income</div>
            </div>
            <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl p-4">
              <ArrowUpRight className="h-6 w-6 text-blue-500 mx-auto mb-2" />
              <div className="font-bold text-brand-primary">Marketing</div>
              <div className="text-sm text-brand-secondary">Growth funding</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}