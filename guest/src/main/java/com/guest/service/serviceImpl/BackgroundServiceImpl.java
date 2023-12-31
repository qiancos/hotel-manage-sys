package com.guest.service.serviceImpl;

import com.guest.pojo.po.Background;
import com.guest.mapper.BackgroundMapper;
import com.guest.service.BackgroundService;
import com.baomidou.mybatisplus.extension.service.impl.ServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

/**
 * <p>
 *  服务实现类
 * </p>
 *
 @author qianye
  * @since 2023-9-10
 */
@Service
public class BackgroundServiceImpl extends ServiceImpl<BackgroundMapper, Background> implements BackgroundService {
    @Autowired
    private BackgroundMapper backgroundMapper;
}
