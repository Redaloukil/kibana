/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License;
 * you may not use this file except in compliance with the Elastic License.
 */
import React from 'react';
import { mountWithIntl } from 'test_utils/enzyme_helpers';
import EmailParamsFields from './email_params';

describe('EmailParamsFields renders', () => {
  test('all params fields is rendered', () => {
    const actionParams = {
      cc: [],
      bcc: [],
      to: ['test@test.com'],
      subject: 'test',
      message: 'test message',
    };
    const wrapper = mountWithIntl(
      <EmailParamsFields
        actionParams={actionParams}
        errors={{ to: [], cc: [], bcc: [], subject: [], message: [] }}
        editAction={() => {}}
        index={0}
      />
    );
    expect(wrapper.find('[data-test-subj="toEmailAddressInput"]').length > 0).toBeTruthy();
    expect(
      wrapper.find('[data-test-subj="toEmailAddressInput"]').first().prop('selectedOptions')
    ).toStrictEqual([{ label: 'test@test.com' }]);
    expect(wrapper.find('[data-test-subj="emailSubjectInput"]').length > 0).toBeTruthy();
    expect(wrapper.find('[data-test-subj="emailMessageInput"]').length > 0).toBeTruthy();
  });
});
